# Update Instructions

## 1. Add 1, 2, 3 Day Options to Date Selector

In your main page component (likely `app/page.tsx`), find the date selector dropdown and add options for 1, 2, and 3 days:

```tsx
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
```

Also update the report page (`app/report/page.tsx`) if it has a similar selector.

## 2. News Sources Added

The following news sources have been added to `lib/config.ts`:
- ✅ Bloomberg Crypto
- ✅ Forbes Digital Assets  
- ✅ The Defiant

These will automatically be included in the news fetching.

