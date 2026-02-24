// Конфигурация Supabase
const SUPABASE_URL = 'https://edltxsziwwvbdnpblxzc.supabase.co'; //
const SUPABASE_KEY = 'sb_publishable_I8nurQtNC1F-NcYar0bxxQ_vrYHSEXa'; //

// Инициализация клиента
const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
