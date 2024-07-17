import { useForm } from "react-hook-form";
import { Label } from "@/Components/ui/label";
import { Link } from 'react-router-dom';
import { Button } from "@/Components/ui/button";
import { Input } from "@/Components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const formSchema = z.object({
  email: z.string().email("Ingresa tu correo electronico"),
});

function FormEmailResetPassword() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data) => {
    console.log("Email data submitted:", data);
  };

  return (
    <div className="flex h-screen w-screen justify-center items-center px-4 sm:px-0">
      <div className="relative bg-white w-full sm:w-2/4 h-auto border rounded-lg px-6 sm:px-14 py-7 flex justify-center flex-col space-y-5">
      <Link to="/login" className="absolute top-4 right-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#5666bf" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M15 9L9 15" stroke="#5666bf" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M9 9L15 15" stroke="#5666bf" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
        <div>
          <h2 className="text-xl sm:text-4xl font-bold text-center">
            ¿Olvidaste tu contraseña?
          </h2>
          <p className="font-semibold text-base sm:text-xl font-sans mt-2 text-center sm:text-left mb-2">
            No te preocupes. Te enviaremos un correo para ayudarte a
            recuperarla.
          </p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <div>
              <Label htmlFor="email">Correo electrónico</Label>
              <Input
                className="py-0.1 border w-full sm:w-4/5 border-colorInputBorder"
                placeholder="Correo electrónico"
                {...register("email")}
                type="text"
              />
              {errors.email && (
                <p className="text-inputSecundary pl-1 font-medium text-xs">
                  {errors.email.message}
                </p>
              )}
            </div>
            <div className="mt-4 flex justify-center items-center">
              <Button
                className="rounded-3xl bg-inputPrimary w-full px-4 sm:w-4/5"
                type="submit"
              >
                Recibir link de recuperación
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FormEmailResetPassword;
