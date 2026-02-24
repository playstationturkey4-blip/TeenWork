// Настройки подключения к твоему проекту Supabase
const SUPABASE_URL = 'https://edltxsziwwvbdnpblxzc.supabase.co';

// Твой публичный ключ (Publishable key)
const SUPABASE_KEY = 'sb_publishable_I8nurQtNC1F-NcYar0bxxQ_vrYHSEXa';

// Создаем клиент под именем mySupabase, чтобы избежать конфликтов в коде
const mySupabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
