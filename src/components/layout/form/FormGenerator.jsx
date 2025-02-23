const FormGenerator = ({ onSubmit, inputsFields, btnName }) => {
  return (
    <form onSubmit={onSubmit} className="w-full flex flex-col gap-5">
      {inputsFields.map((field) => (
        <div key={field.name} className="flex flex-col">
          <label htmlFor={field.name} className="font-medium">
            {field.name.charAt(0).toUpperCase() + field.name.slice(1)}
          </label>
          <input
            id={field.name}
            name={field.name}
            type={field.type}
            placeholder={field.placeholder}
            value={field.value ?? ""}
            onChange={field.onChange}
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
      ))}
      <button
        type="submit"
        className="p-2 rounded-md w-full text-center text-black font-semibold bg-primary hover:bg-yellow-400 transition"
      >
        {btnName}
      </button>
    </form>
  );
};

export default FormGenerator;
