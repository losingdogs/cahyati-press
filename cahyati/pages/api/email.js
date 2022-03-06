import { createClient } from '@supabase/supabase-js'

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);


export default async function handler(req, res) {

    const { email } = req.body;

    if (!email || req.method !== 'POST') {
        res.status(400).json({})
        return;
    }


    const { data, error } = await supabase
        .from('emails')
        .insert([
            { email }
        ])


    res.status(200).json({})
}
