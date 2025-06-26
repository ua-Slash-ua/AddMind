export function formatValueAuto(value: unknown): string {
    if (value instanceof Date) {
        // Якщо обʼєкт Date — повертаємо повну дату з часом
        return value.toLocaleString();
    }

    if (typeof value === 'string') {
        // Перевіряємо, чи це рядок у форматі дати (ISO, або інший парсабельний формат)
        const date = new Date(value);
        if (!isNaN(date.getTime())) {
            // Якщо це дата — теж форматуємо красиво
            return date.toLocaleString();
        }
        // Якщо ні — просто рядок
        return value;
    }

    if (typeof value === 'number') {
        // Число просто конвертуємо в рядок
        return value.toString();
    }

    // Якщо undefined, null або інші типи
    if (value === null || value === undefined) {
        return '';
    }

    // Якщо це обʼєкт або інший тип — перетворюємо у JSON для наочності
    if (typeof value === 'object') {
        try {
            return JSON.stringify(value);
        } catch {
            return String(value);
        }
    }

    // Для всіх інших випадків
    return String(value);
}
