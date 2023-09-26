import React from "react";
import { useSetRecoilState } from "recoil";
import { Categories, ICountry, countryState } from "../atoms";

export default function ToGoList({ id, country, category }: ICountry) {
    const setCountries = useSetRecoilState(countryState);
    const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        const {
            currentTarget: { name },
        } = event;
        setCountries((prevCountries: ICountry[]) => {
            const targetIndex = prevCountries.findIndex(
                (country) => country.id === id
            );
            const newCountry = { id, country, category: name as Categories };
            return [
                ...prevCountries.slice(0, targetIndex),
                newCountry,
                ...prevCountries.slice(targetIndex + 1),
            ];
        });
    };

    const onDelete = () => {
        setCountries((oldToGos) => oldToGos.filter((togo) => togo.id !== id))
    }

    const createButtons = () => {
        const categoryButtons = Object.values(Categories).map((categoryValue, index) => {
            if (category === 'TO_GO' && categoryValue === 'TO_GO') {
                return (
                    <>
                        <button name="VISITED" onClick={onClick} key={index + "1"}>✅</button>
                        <button onClick={onDelete} key={index + "2"} >🗑️</button>
                    </>
                )
            }
            if (category === 'VISITED' && categoryValue === "VISITED") {
                return (
                    <>
                        <button name="LIKED" onClick={onClick} key={index + "3"}>👍</button>
                        <button name="TO_GO" onClick={onClick} key={index + "4"}>❌</button>
                    </>
                )
            }
            if (category === 'LIKED' && categoryValue === "LIKED") {
                return (
                    <button name="VISITED" onClick={onClick} key={index + "5"}>👎</button>
                )
            }
        });

        return categoryButtons;
    };
    return (
        <li>
            <span>{country}</span>
            {createButtons()}
        </li>
    );
}