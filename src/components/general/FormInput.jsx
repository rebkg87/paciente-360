import {forwardRef} from "react";

const FormInput = forwardRef (({ id, type = "text", placeholder, iconInput, labelInput, ...rest }, ref) => {
    return (
        <div className="flex items-center gap-4 w-full bg-[#F9FBFF] p-3 rounded-lg border border-me drop-shadow-primary-shadow focus-within:ring-2 focus-within:ring-medium-soft-green">
            {iconInput && (
                <img
                    src={iconInput}
                    alt={labelInput || "input icon"}
                    className="h-5 w-5"
                />
            )}
            <input
                id={id}
                type={type}
                placeholder={placeholder}
                ref={ref}
                {...rest}
                className="w-full bg-transparent outline-none text-text-color-general placeholder-gray-400"
            />
        </div>
    );
});

export default FormInput;
