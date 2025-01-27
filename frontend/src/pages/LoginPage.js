import LoginForm from "../components/LoginForm";

export default function LoginPage() {
  return (
    <div style={styles.pageContainer}>
      <div style={styles.card}>
        <h1 style={styles.header}>Login Here</h1>
        <LoginForm />
      </div>
    </div>
  );
}

const styles = {
  pageContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    backgroundColor: '#e9ecef', // Softer background color
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: '8px',
    padding: '40px 30px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    width: '100%',
    maxWidth: '400px',
    textAlign: 'center',
  },
  header: {
    color: '#495057', // Darker text for better contrast
    marginBottom: '20px',
    fontSize: '2rem',
    fontWeight: '600',
  },
};
