// Внимательно: здесь теперь 'edit' вместо 'edlt'!
const SUPABASE_URL = 'https://editxsziwwvbdnpblxzc.supabase.co';

// Твой ключ из раздела API
const SUPABASE_KEY = 'sb_publishable_I8nurQtNC1F-NcYar0bxxQ_vrYHSEXa'; 

// Инициализируем клиент
const mySupabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
