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
            <Title>내가 가고싶은 나라들</Title>
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
            <h1>내가 좋아하는 나라들</h1>
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
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 3rem;
    border: #64a077 3px solid;
    border-radius: 2rem;
`;
const Title = styled.h1`
margin-bottom: 2rem;
`