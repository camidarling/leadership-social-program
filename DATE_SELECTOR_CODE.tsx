// Copy this code snippet to update your date selector
// Find the select dropdown in app/page.tsx and app/report/page.tsx

// BEFORE:
<select
  value={days}
  onChange={(e) => setDays(Number(e.target.value))}
  className="border border-gray-300 rounded px-2 py-1 text-sm"
>
  <option value={7}>7</option>
  <option value={14}>14</option>
  <option value={30}>30</option>
</select>

// AFTER (add 1, 2, 3 day options):
<select
  value={days}
  onChange={(e) => setDays(Number(e.target.value))}
  className="border border-gray-300 rounded px-2 py-1 text-sm"
>
  <option value={1}>1</option>
  <option value={2}>2</option>
  <option value={3}>3</option>
  <option value={7}>7</option>
  <option value={14}>14</option>
  <option value={30}>30</option>
</select>

