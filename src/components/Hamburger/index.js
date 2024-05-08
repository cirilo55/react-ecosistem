import { useState } from 'react';
import { CircleContainer, Group, Bar } from './styles';

export default function Hamburger({ isOpen, onClick }) {
    return (
        <CircleContainer isOpen={isOpen} onClick={onClick}>
            <Group>
                <Bar top isOpen={isOpen} />
                <Bar middle isOpen={isOpen} />
                <Bar bottom isOpen={isOpen} />
            </Group>
        </CircleContainer>
    );
}