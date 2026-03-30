import Form from "@/components/auth/form";

export default function SignUp () {
    const onSubmit = async (email, password) => {
        try {
            await fetch("/api/auth/signup", {
                method: "POST",
                body: JSON.stringify({email, password}),
                headers: {
                    "Content-Type": "Application/json"
                }
            })
            alert("Signup Successful");
        } catch (err) {
            console.error(err);
        }
    } 
    return <Form signin={false} onFormSubmit={onSubmit}/>
};
