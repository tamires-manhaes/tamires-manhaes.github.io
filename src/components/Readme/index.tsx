import MDContent from '../MDContent';

export interface ReadmeProps {
  markdown: string;
}

export default function Readme(props: ReadmeProps) {
  return (
    <div className="flex flex-col items-stretch p-6 border-zinc-800 rounded-2xl">
      <div
        className="prose prose-zinc prose-invert"
        style={{ maxWidth: '100%' }}
      >
        <MDContent markdown={props.markdown} />
      </div>
    </div>
  );
}
