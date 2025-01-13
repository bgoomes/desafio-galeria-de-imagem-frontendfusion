
const URL = 'https://picsum.photos/v2/list/'

export async function Fetch() {
    const resp = await fetch(URL)
    if(resp.status === 200) {
        const data = await resp.json()
        return data
    }
}