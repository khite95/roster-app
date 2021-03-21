import React from 'react';
import './Component.css';

type Props = {
  author: string,
  year: number
};

export const Footer: React.FC<Props> = ({
  author = 'Kenny Hite',
  year = 2021
}) => {
  return (
    <footer className="footer">
      <p className="text-center">
        {author} &copy; {year}
      </p>
    </footer>
  );
};
