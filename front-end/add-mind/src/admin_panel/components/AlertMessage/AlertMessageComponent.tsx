import styles from './aletMessage.module.css'

export function AlertMessageComponent() {
    return (
        <div>
            <div className={styles.alert_message_container} id="alert_message_container">
                <div className={styles.alert_message_header}>
                    <div className={styles.alert_message_icon}>
                        i
                    </div>
                    <span className={styles.alert_message_title}>
                        Info
                    </span>
                    <div className={styles.alert_message_close}>
                        X
                    </div>
                </div>
                <div className={styles.alert_message_content}>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid amet, aspernatur corporis
                        cumque dolor ducimus explicabo incidunt laboriosam maiores neque odio optio placeat quis,
                        quisquam, ratione sed veniam! A, ad?
                    </p>
                </div>
                <div className={styles.alert_message_loader}>

                </div>
            </div>
        </div>
    )
}