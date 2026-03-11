import Form from "@/components/auth/form";

export default function SignUp () {
    const onSubmit = async (email, password) => {
        const response = await fetch("/api/auth/signup", {
            method: "POST",
            body: {email, password},
            headers: {
                "Content-Type": "Application/json"
            }
        })
        await response.json()
    } 
    return <Form signin={false} onFormSubmit={onSubmit}/>
};
