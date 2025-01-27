import SignupForm from "../components/SignupForm";

export default function SignupPage() {
  return (
    <div style={styles.pageContainer}>
      <div style={styles.card}>
        <h1 style={styles.header}>Signup</h1>
        <SignupForm />
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
    backgroundColor: '#f4f4f4',
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: '8px',
    padding: '40px 30px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    width: '100%',
    maxWidth: '400px',
    textAlign: 'center',
  },
  header: {
    color: '#333',
    marginBottom: '30px',
    fontSize: '2.5rem',
    fontWeight: '600',
  },
};
