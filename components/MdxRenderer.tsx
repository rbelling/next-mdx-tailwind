'use client';
import { MDXRemote, MDXRemoteProps } from 'next-mdx-remote';
import {useEffect, useState} from "react";

const MdxRenderer = (props: MDXRemoteProps) => {
    const [content, setContent] = useState<JSX.Element | null>(null)
    useEffect(() => {
        setContent(<MDXRemote {...props} />)
    }, [props])

    return <div>{content}</div>
};

export default MdxRenderer;
