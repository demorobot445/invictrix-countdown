import emailjs from "@emailjs/browser";
import { useState } from "react";

const Form = () => {
  const [email, setEmail] = useState<string>("");
  const [status, setStatus] = useState<string>(
    "Receive a private note when the doors reopen"
  );

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setStatus("Please wait ...!");
      const result = await emailjs.send(
        "service_tz9hbe5",
        "template_ayiu9fg",
        {
          email,
        },
        { publicKey: "2j-YcYkm2KU59li7I" }
      );

      console.log(result);
    } catch (error) {
      console.log(error);
    } finally {
      setStatus("Email Send Successfully");
    }
  };

  return (
    <form
      onSubmit={sendEmail}
      className="flex flex-col gap-4 w-full items-center"
    >
      <input
        className="h-12 w-full lg:w-[450px] font-proxmia-nova text-white focus:outline-none p-4 border-[#f2d38a] border placeholder:text-[#777777]"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        type="email"
        name="email"
        placeholder="Email address"
        required
      />
      <button
        type="submit"
        className="text-[#f2d38a] hover:text-[#010101] hover:bg-[#f2d38a] transition lg:h-12 cursor-pointer py-2 w-full lg:w-[450px] border-[#f2d38a] border uppercase"
      >
        {status}
      </button>
    </form>
  );
};

export default Form;
