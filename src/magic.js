
export default function magic (req, res) {
    console.debug('Magic hit');
    res.send({ x: 'It happened' })
}

export function wizard (req, res) {
    console.debug('Wiz');
    res.send({ w: 'Dumbledore' })
}
