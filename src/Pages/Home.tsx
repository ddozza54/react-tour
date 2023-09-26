import { useRecoilValue } from "recoil";
import ToGoForm from "../components/ToGoForm";
import ToGoList from "../components/ToGoList";
import { likedSelector, toGoSelector, visitedSelector } from "../atoms";
import styled from "styled-components";

export default function Home() {
    const toGoCountries = useRecoilValue(toGoSelector);
    const visitedCountries = useRecoilValue(visitedSelector);
    const likedContries = useRecoilValue(likedSelector);

    return (
        <HomeWrapper>
            <h1>내가 가고싶은 나라들</h1>
            <ToGoForm />
            <ul>
                {toGoCountries?.map((country) => (
                    <ToGoList key={country.id} {...country} />
                ))}
            </ul>
            <h1>내가 가본 나라들</h1>
            <ul>
                {visitedCountries?.map((country) => (
                    <ToGoList key={country.id} {...country} />
                ))}
            </ul>
            <h1>내가 갈 예정인 나라들</h1>
            <ul>
                {likedContries?.map((country) => (
                    <ToGoList key={country.id} {...country} />
                ))}
            </ul>
        </HomeWrapper>
    );
}

const HomeWrapper = styled.div`
    display: flex;
`