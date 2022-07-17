import { Button } from 'antd'
import React from 'react'
import styled from 'styled-components'
interface ButtonProps {
    type?: "primary" | "link",
    htmlType?: "button" | "submit" | "reset",
    children?: React.ReactNode

}

export const ButtonComponent: React.FC<ButtonProps> = ({ type, htmlType, children }) => {
    return (
        <StyledButton type={type} htmlType={htmlType}>
            {children}
        </StyledButton>
    )
}

const StyledButton = styled(Button)``