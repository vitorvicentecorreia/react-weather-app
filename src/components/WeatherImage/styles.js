import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;
export const Image = styled.img`
    width: ${({ size }) => (size === "large" ? "150px" : "35px")};
`;
