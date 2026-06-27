interface Props {
  errors: string[];
  onDismiss: (index: number) => void;
}

export function ErrorToast({ errors, onDismiss }: Props) {
  if (errors.length === 0) return null;

  return (
    <div className="error-toast-container">
      {errors.map((err, i) => (
        <div key={i} className="error-toast">
          <span>{err}</span>
          <button onClick={() => onDismiss(i)}>×</button>
        </div>
      ))}
    </div>
  );
}
