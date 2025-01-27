import { useEffect } from "react";
import Notes from "../components/Notes";
import UpdateForm from "../components/UpdateForm";
import CreateForm from "../components/CreateForm";
import notesStore from "../stores/notesStore";

export default function NotesPage() {
  const store = notesStore();

  // Use effect to fetch notes
  useEffect(() => {
    store.fetchNotes();
  }, [store]);

  return (
    <div style={styles.pageContainer}>
      <div style={styles.contentContainer}>
        <h1 style={styles.header}>My Notes</h1>

        <div style={styles.formContainer}>
          <CreateForm />
          <UpdateForm />
        </div>

        <div style={styles.notesContainer}>
          <Notes />
        </div>
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
    backgroundColor: '#f8f9fa',
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
  },
  contentContainer: {
    width: '100%',
    maxWidth: '1000px',  // Max width for responsiveness
    padding: '20px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
  },
  header: {
    color: '#343a40',
    marginBottom: '30px',
    fontSize: '2.5rem',
    fontWeight: '700',
  },
  formContainer: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '20px',
    marginBottom: '30px',
  },
  notesContainer: {
    marginTop: '30px',
    backgroundColor: '#e9ecef',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
  },
};
