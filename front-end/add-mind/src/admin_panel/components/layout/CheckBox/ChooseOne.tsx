interface ChooseOneProps {
    id: number;
    name: string;
    checked?: boolean; // опційно, якщо хочеш контролювати вибір
}

export default function ChooseOne({ id, name, checked }: ChooseOneProps) {
    return (
        <input
            type="checkbox"
            key={`choose_${name}_${id}`}
            name={`choose_${name}_${id}`}
            checked={checked}
            readOnly={checked !== undefined}
        />
    );
}
