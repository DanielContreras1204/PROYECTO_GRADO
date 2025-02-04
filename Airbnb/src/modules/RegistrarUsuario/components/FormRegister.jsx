import React, { useState } from 'react';
import { addUser } from '../service/UserCrud';
import { enqueueSnackbar } from 'notistack';
import { useForm } from "react-hook-form"
import { createUserWithEmailAndPassword, auth } from "../../../firebase/firebaseService"

function FormRegister() {
    const [error, setError] = useState(false);

  const { register, handleSubmit, formState: { errors }, reset } = useForm()

  const onSubmit = handleSubmit(async (data) => {
    data.rol = "cliente"

    const { email, password } = data
    try {

      console.log("Length", password.length)

      if (password.length < 6) {
        setError(true)
      } else {
        const userCredential = await createUserWithEmailAndPassword(auth, email.toString(), password);
        await addUser(data)
        enqueueSnackbar('Usuario registrado exitosamente!', { variant: 'success' })
        reset()
        setError(false)
      }

    } catch (error) {
      enqueueSnackbar("error al registrar usuario", { variant: 'error' })
    }

  })

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-center mb-6">Registro de Usuario</h2>
        <form onSubmit={onSubmit}>


          {/* Nombre de usuario */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Nombre de usuario</label>
            <input
              {...register("username", { required: true })}
              type="text"
              name="username"
              className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
              placeholder="Ingrese su nombre de usuario"
            />

            {errors.username && (<p className="text-red-500 text-sm">Campo requerido</p>)}
          </div>

          {/* Correo electrónico */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Correo electrónico</label>
            <input
              {...register("email", { required: true })}
              type="email"
              className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
              placeholder="Ingrese su correo electrónico"
            />
            {errors.email && (<p className="text-red-500 text-sm">Campo requerido</p>)}
          </div>

          {/* Teléfono */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Número de teléfono</label>
            <input
              {...register("phone")}
              type="number"
              className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
              placeholder="Ingrese su número de teléfono"
            />
            {errors.phone && (<p className="text-red-500 text-sm">Campo requerido</p>)}
          </div>

          {/* Contraseña */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Contraseña</label>
            <input
              {...register("password", { required: true })}
              type="password"
              className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
              placeholder="Ingrese su contraseña"
            />
            {errors.password && (<p className="text-red-500 text-sm">*Campo requerido</p>)}
            {error&&(<span className='text-red-600'>La contraseña debe tener minimo 6 caracteres</span>)}
          </div>



          {/* Botón de envío */}
          <button
            type="submit"
            className="w-full py-2 px-4  bg-green-500 hover:bg-green-600 text-white font-semibold rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
          >
            Registrarse
          </button>
        </form>
      </div>
    </div>
  );
}

export default FormRegister;
