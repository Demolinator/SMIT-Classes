import Form from "@/components/auth/form";
import { signIn } from "next-auth/react";

export default function SignIn () {
     const onSubmit = async (email, password) => {
        const data = await signIn("credentials", { email, password, redirect: false, });
        console.log(data)
    } 
    return <Form signin={true} onFormSubmit={onSubmit}/>
};
