import { Pool } from 'pg';

export default function EmployeeCard({ employee, error }) {
  if (error) return <h2>{error}</h2>;
  if (!employee) return <h2>Loading...</h2>;

  return (
    <div style={{ textAlign: 'center', marginTop: '2rem' }}>
      <img
        src={employee.photo_url}
        alt={employee.name}
        style={{ maxWidth: '300px' }}
      />
      {/* <h1>{employee.name}</h1> */}
    </div>
  );
}

export async function getServerSideProps({ params }) {
  const { token } = params;

  if (!token) {
    return { props: { error: 'Token missing' } };
  }

  const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
  });

  try {
    const result = await pool.query('SELECT name, photo_url FROM employees WHERE token = $1', [token]);

    if (result.rows.length === 0) {
      return { props: { error: 'Employee not found' } };
    }

    return { props: { employee: result.rows[0] } };
  } catch (err) {
    return { props: { error: 'Database error' } };
  } finally {
    await pool.end();
  }
}
