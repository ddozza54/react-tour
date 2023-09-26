import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import { Categories, ICountry, countryState } from "../atoms";
import { IFormData } from "../types";

export default function ToGoForm() {
    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm<IFormData>();

    const setContries = useSetRecoilState(countryState);
    const onSubmit = ({ country }: IFormData) => {
        setContries((prevCountries: ICountry[]) => [
            {
                id: Date.now(),
                country,
                category: Categories.TO_GO,
            },
            ...prevCountries,
        ]);
        setValue("country", "");
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <input {...register("country", { required: "😯 Required!" })} />
                <span>{errors?.country?.message}</span>
            </div>
            <div>
                <button type="submit">가자!</button>
            </div>
        </form>
    );
}

