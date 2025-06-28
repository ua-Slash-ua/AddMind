// app/admin-panel/user/[id]/edit/page.tsx

import EditBlock from "@/admin_panel/components/EditBlock/EditBlock";

interface EditUserPageProps {
    params: { id: string };
}

export default function EditUserPage({params}: EditUserPageProps) {
    const id = parseInt(params.id, 10);

    return (<>
        <EditBlock/>
        <div>Edit user #{id}</div>
    </>);
}
