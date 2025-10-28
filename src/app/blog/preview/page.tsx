import previewContent from './preview.mdx';

const content = String(previewContent);

export default function BlogPreview() {
    return (
        <div>
            <p>Blog Preview</p>
            <pre>{content}</pre>
        </div>
    );
}
