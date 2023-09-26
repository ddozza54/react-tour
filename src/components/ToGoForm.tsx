import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import { Categories, ICountry, countryState } from "../atoms";
import { IFormData } from "../types";
import styled from "styled-components";

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
        <Form onSubmit={handleSubmit(onSubmit)}>
            <InputWrapper>
                <Input {...register("country", { required: "😯 Required!" })} />
                <span>{errors?.country?.message}</span>
            </InputWrapper>
            <div>
                <GoBtn type="submit">가자!</GoBtn>
            </div>
        </Form>
    );
}

const Form = styled.form`
width: 100%;
padding: 1rem;
display: flex;
justify-content: space-between;
align-items: center;
`;
const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 3rem;
`;
const Input = styled.input`
width: auto;
padding: 1rem;
border-radius: 0.5rem;
border: none;
background-color: #bcd0b8;
margin-right: 0.5rem;
&:focus{
outline: none;
background-color: beige;
}`;
const GoBtn = styled.button`
    padding: 1rem;
    width: 4rem;
    background-color: #64a077;
    color: white;
    font-size: small;
`