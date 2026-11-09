import * as React from "react"

const fieldClass =
  "h-9 w-full min-w-0 rounded-lg border border-input bg-transparent px-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 dark:bg-input/30"

export default function FileUpload() {
  return (
    <div className="flex w-full max-w-lg flex-col gap-4 rounded-xl bg-card py-4 text-sm text-card-foreground ring-1 ring-foreground/10">
      <div className="grid gap-1 px-4">
        <h3 className="text-base font-semibold leading-snug">Set up your first Studio</h3>
        <p className="text-sm text-muted-foreground">
          Set up your Studio to start managing your projects efficiently.
        </p>
      </div>
      <div className="space-y-4 px-4">
        <div className="w-full space-y-2">
          <label htmlFor="studio-name" className="flex items-center gap-1 text-sm font-medium leading-none">
            Studio Name <span className="text-destructive">*</span>
          </label>
          <input id="studio-name" type="text" placeholder="Studio Name" required className={fieldClass} />
        </div>
        <div className="w-full space-y-2">
          <label htmlFor="studio-input" className="flex items-center gap-1 text-sm font-medium leading-none">
            Upload File <span className="text-destructive">*</span>
          </label>
          <input
            id="studio-input"
            type="file"
            className={`${fieldClass} p-0 pr-3 italic text-muted-foreground file:mr-3 file:h-full file:border-0 file:border-r file:border-solid file:border-input file:bg-transparent file:px-3 file:text-sm file:font-medium file:not-italic file:text-foreground`}
          />
          <p className="text-xs text-muted-foreground">You can upload a file here.</p>
        </div>
      </div>
      <div className="flex justify-end gap-2 px-4 max-sm:justify-center">
        <button
          type="button"
          className="inline-flex h-8 items-center justify-center rounded-lg border border-border bg-background px-3 text-sm font-medium hover:bg-muted dark:border-input dark:bg-input/30 dark:hover:bg-input/50 max-sm:flex-1"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="inline-flex h-8 items-center justify-center rounded-lg bg-primary px-3 text-sm font-medium text-primary-foreground hover:bg-primary/80 max-sm:flex-1"
        >
          Upload
        </button>
      </div>
    </div>
  )
}
