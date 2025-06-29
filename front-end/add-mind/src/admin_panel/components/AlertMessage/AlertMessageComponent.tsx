import styles from './aletMessage.module.css'

export function AlertMessageComponent() {
    return (
        <div>
            <div className={styles.alert_message_container} id="AM_container">
                <div className={styles.alert_message_header} id="AM_header">
                    <div className={styles.alert_message_icon} id="AM_icon">
                        i
                    </div>
                    <span className={styles.alert_message_title} id="AM_title">
                        Info
                    </span>
                    <div className={styles.alert_message_close} id="AM_close">
                        X
                    </div>
                </div>
                <div className={styles.alert_message_content} id="AM_content">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid amet, aspernatur corporis
                    cumque dolor ducimus explicabo incidunt laboriosam maiores neque odio optio placeat quis,
                    quisquam, ratione sed veniam! A, ad?

                </div>
                <div className={styles.alert_message_loader} id="AM_loader">

                </div>
            </div>
        </div>
    )
}