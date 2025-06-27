interface EditUserPageProps {
    params: {
        id: string;
    };
}

export default async function EditUserPage({ params }: EditUserPageProps) {
    const id = params.id;

    // Тепер можна робити запит до БД на сервері, щоб отримати дані користувача
    // const user = await getUserById(id);

    return <div>Edit user {id}</div>;
}
