import {render} from '@testing-library/react';
import Intro from '@/components/Intro';

describe('Home', () => {
    it('matches snapshot', async () => {
        const props: Parameters<typeof Intro>[0] = {
            "compiledSource": "/*@jsxRuntime automatic @jsxImportSource react*/\nconst {jsx: _jsx, jsxs: _jsxs} = arguments[0];\nconst {useMDXComponents: _provideComponents} = arguments[0];\nfunction _createMdxContent(props) {\n const _components = Object.assign({\n p: \"p\",\n strong: \"strong\"\n }, _provideComponents(), props.components), {Intro} = _components;\n if (!Intro) _missingMdxReference(\"Intro\", true, \"1:37-1:46\");\n return _jsxs(_components.p, {\n children: [\"Some \", _jsx(_components.strong, {\n children: \"mdx\"\n }), \" text, with a component \", _jsx(Intro, {})]\n });\n}\nfunction MDXContent(props = {}) {\n const {wrapper: MDXLayout} = Object.assign({}, _provideComponents(), props.components);\n return MDXLayout ? _jsx(MDXLayout, Object.assign({}, props, {\n children: _jsx(_createMdxContent, props)\n })) : _createMdxContent(props);\n}\nreturn {\n default: MDXContent\n};\nfunction _missingMdxReference(id, component, place) {\n throw new Error(\"Expected \" + (component ? \"component\" : \"object\") + \" `\" + id + \"` to be defined: you likely forgot to import, pass, or provide it.\" + (place ? \"\\nIt’s referenced in your code at `\" + place + \"`\" : \"\"));\n}\n",
            "frontmatter": {},
            "scope": {}
        }
        const {container} = render(<Intro {...props} />);

        expect(container).toMatchSnapshot();
    });
});
