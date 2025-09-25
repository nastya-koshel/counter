
type ButtonPropsTitle = {
    title: string;
    onClick: () => void;
    disabled?: boolean;
}

export const Button = (props: ButtonPropsTitle) => {
    return (
        <button className="btn" onClick={props.onClick} disabled={props.disabled}>
            {props.title}
        </button>
    );
};
