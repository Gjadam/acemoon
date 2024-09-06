import connectToDB from "@/configs/db";
import OtpModel from "@/models/Otp";
import UserModel from "@/models/User"
import { generateAccessToken, generateRefreshToken, hashPassword, validateEmail, validatePassword, validatePhone } from "@/utils/auth";
import { roles } from "@/utils/constants";

export async function POST(req) {
    try {
        connectToDB();
        const body = await req.json();
        const { name, email, password, phone, code } = body;

        if (!phone || !code) {
            return Response.json(
                { message: "Phone number or verify code is not defined !" },
                { status: 400 }
            )
        }

        const isValidPhone = validatePhone(phone);
        const isValidPassword = validatePassword(password);

        if (!isValidPassword || !isValidPhone) {
            return Response.json(
                { message: "Phone or password is invalid" },
                { status: 419 }
            );
        }

        const otp = await OtpModel.findOne({ phone, code });

        if (otp) {
            const date = new Date();
            const now = date.getTime();

            if (otp.expTime > now) {

                if (name && email) { // if name & email exist => Do signup 

                    const isValidEmail = validateEmail(email);

                    if (!isValidEmail) {
                        return Response.json(
                            { message: "Email is invalid" },
                            { status: 419 }
                        );
                    }

                    const isUserExist = await UserModel.findOne({
                        $or: [{ name }, { email }, { phone }]
                    })

                    if (isUserExist) {
                        return Response.json({
                            message: "The username or email or phone exist already !!"
                        }, {
                            status: 422,
                        })
                    }

                    const accessToken = generateAccessToken({ email })

                    const hashedPassword = await hashPassword(password)

                    const users = await UserModel.find({})

                    await UserModel.create({
                        name,
                        email,
                        phone,
                        password: hashedPassword,
                        role: users.length > 0 ? roles.USER : roles.ADMIN
                    })

                    return Response.json(
                        { message: "Creating user successfully :)" },
                        {
                            status: 201,
                            headers: { 'Set-Cookie': `token=${accessToken};path=/;httpOnly=true` }
                        }
                    )

                } else { // if name & email not exist => Do signin

                    const user = await UserModel.findOne({ phone });

                    if (!user) {
                        return Response.json({ message: "User not found" }, { status: 422 });
                    }

                    const accessToken = generateAccessToken({ phone });
                    const refreshToken = generateRefreshToken({ phone });

                    await UserModel.findOneAndUpdate(
                        { phone },
                        {
                            $set: {
                                refreshToken,
                            },
                        }
                    );

                    const headers = new Headers()
                    headers.append("Set-Cookie", `token=${accessToken};path=/;httpOnly=true;`,)
                    headers.append("refresh-token", `token=${refreshToken};path=/;httpOnly=true;`,)

                    return Response.json(
                        { message: "User logged in successfully :))" },
                        {
                            status: 200,
                            headers,
                        }
                    );

                }

            } else {
                return Response.json({ message: "Code is expired :))" }, { status: 410 });
            }
        } else {
            return Response.json(
                { message: "Code is not correct !!" },
                { status: 409 }
            );
        }
    } catch (err) {
        console.log(err);

        return Response.json(
            { message: err },
            { status: 500 }
        )
    }

}