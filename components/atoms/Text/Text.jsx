import React from 'react';
import Link from 'next/link';
import { Noto_Sans_KR } from 'next/font/google';
import clsx from 'clsx';
import styles from './Text.module.scss';

const notoSans = Noto_Sans_KR({
	subsets: ['latin'],
	weight: ['200', '400', '700'],
	preload: true,
	variable: '--font-notoSans',
	display: 'block',
	adjustFontFallback: true,
});

export function Text({ style, className, tag = 'p', isOn = false, url, children }) {
	return React.createElement(
		tag,
		{
			style,
			className: clsx(styles.txt, className, notoSans.variable, isOn && styles.on),
		},
		url ? React.createElement(Link, { href: url }, children) : children
	);
}
