"use client";
import * as React from "react";

export type State = { open?: boolean; active?: number; query?: string; notice?: string; selected?: string; reveal?: number; previous?: number; blend?: number; expanded?: number; highlighted?: boolean };
export type Props = { title?: string; state?: State; onStateChange?: (state: State) => void; onAction?: (action: string) => void; seeking?: boolean };
function useValue(initial: State, controlled: State | undefined, notify: Props["onStateChange"]) {
  const [local, setLocal] = React.useState(initial);
  const value = controlled ?? local;
  const set = (patch: Partial<State>) => { const next = { ...value, ...patch }; setLocal(next); notify?.(next); };
  return [value, set] as const;
}
function Icon({ name = "arrow", size = 18 }: { name?: string; size?: number }) {
  const paths: Record<string, React.ReactNode> = {
    arrow: <><path d="M5 19 19 5M5 5h14v14"/></>, chevron:<path d="m8 10 4 4 4-4"/>,
    more:<><circle cx="5" cy="12" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/></>,
    file:<><path d="M14 3H5v18h14V8zM14 3v5h5M8 12h8M8 16h5"/></>, copy:<><rect x="8" y="8" width="12" height="12" rx="2"/><path d="M16 8V4H4v12h4"/></>,
    link:<><path d="m10 13 4-4M8 15l-1 1a4 4 0 0 1-6-6l4-4a4 4 0 0 1 6 0M16 9l1-1a4 4 0 0 1 6 6l-4 4a4 4 0 0 1-6 0" transform="translate(1 0) scale(.9)"/></>,
    archive:<><rect x="3" y="4" width="18" height="4" rx="1"/><path d="M5 8v12h14V8M9 12h6"/></>,
    search:<><circle cx="10" cy="10" r="6"/><path d="m15 15 5 5"/></>, close:<path d="m6 6 12 12M6 18 18 6"/>,
    grid:<><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></>,
    bolt:<path d="m13 2-9 12h7l-1 8 10-13h-7z"/>, check:<path d="m5 12 4 4L19 6"/>,
    edit:<><path d="m4 16-1 5 5-1L20 7l-4-4zM13 6l5 5"/></>, plus:<path d="M12 5v14M5 12h14"/>,
    comment:<path d="M4 4h16v12H9l-5 4z"/>, sun:<><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2M5 5l1 1M18 18l1 1M5 19l1-1M18 6l1-1"/></>,
  };
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name] ?? paths.arrow}</svg>;
}
function menuKeys(event: React.KeyboardEvent, host: HTMLElement, close: () => void) {
  const items = [...host.querySelectorAll<HTMLButtonElement>('[role="menuitem"]')];
  const index = items.indexOf(document.activeElement as HTMLButtonElement);
  const moves: Record<string, number> = { ArrowDown: (index + 1) % items.length, ArrowUp: (index - 1 + items.length) % items.length, Home: 0, End: items.length - 1 };
  if (event.key in moves) { event.preventDefault(); items[moves[event.key]]?.focus(); }
  if (event.key === "Escape") { event.preventDefault(); close(); }
  if (event.key === "Tab") close();
}

export default function AnchoredActionMenu({title="Summer release",state,onStateChange,onAction,seeking=false}: Props) {
  const [v,set] = useValue({open:false,notice:"",active:0},state,onStateChange);
  const root=React.useRef<HTMLDivElement>(null), trigger=React.useRef<HTMLButtonElement>(null);
  const menuId=React.useId();
  const close=()=>{set({open:false});trigger.current?.focus()};
  React.useEffect(()=>{if(!v.open||seeking)return;const outside=(e:PointerEvent)=>{if(!root.current?.contains(e.target as Node))set({open:false})};document.addEventListener("pointerdown",outside);return()=>document.removeEventListener("pointerdown",outside)},[v.open,seeking]);
  React.useEffect(()=>{if(v.open&&!seeking)root.current?.querySelector<HTMLButtonElement>('[role="menuitem"]')?.focus()},[v.open,seeking]);
  const perform=async(action:string)=>{let notice=action;if(action==="Copy project name"){try{await navigator.clipboard.writeText(title);notice="Project name copied"}catch{notice="Clipboard unavailable. Select and copy the project name."}}if(action==="Duplicate draft")notice="Draft duplicated locally";if(action==="Archive draft")notice="Draft archived locally";set({open:false,notice});onAction?.(action);trigger.current?.focus()};
  
  return (
    <div className={`w-full relative text-left text-sm text-foreground ${seeking ? '[&_*]:!transition-none [&_*]:!animate-none' : ''}`} data-seek={seeking}>
      <div className="max-w-[440px] mx-auto min-h-[430px] pt-6">
        <div className="border border-border rounded-2xl bg-background p-6 shadow-sm">
          
          <div className="flex gap-3 items-center">
            <div className="bg-foreground text-background text-2xl tracking-tighter pr-1 w-10 h-10 flex items-center justify-center rounded-xl" aria-hidden="true">
              n.
            </div>
            <div>
              <h2 className="text-sm font-medium tracking-tight m-0">{title}</h2>
              <p className="text-[11px] text-muted-foreground m-0 mt-0.5">Northstar Studio · Project files</p>
            </div>
            <div className="ml-auto relative" ref={root}>
              <button 
                ref={trigger} 
                className="w-9 h-9 rounded-lg border border-border flex items-center justify-center hover:bg-muted/50 aria-expanded:bg-muted transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1" 
                aria-label="Project actions" 
                aria-haspopup="menu" 
                aria-expanded={!!v.open} 
                aria-controls={menuId} 
                onClick={()=>set({open:!v.open})} 
                onKeyDown={e=>{if(e.key==='ArrowDown'){e.preventDefault();set({open:true})}}}
              >
                <Icon name="more" size={18} />
              </button>
              
              {v.open && (
                <div 
                  id={menuId} 
                  className="absolute right-0 top-11 w-56 p-1.5 z-10 bg-popover text-popover-foreground border border-border rounded-xl shadow-lg animate-in fade-in zoom-in-95 origin-top-right duration-200" 
                  role="menu" 
                  aria-label="Project actions" 
                  style={v.reveal===undefined?undefined:{opacity:v.reveal,transform:`translateY(${(1-v.reveal)*-7}px) scale(${.97+.03*v.reveal})`}} 
                  onKeyDown={e=>menuKeys(e,e.currentTarget,close)}
                >
                  <header className="px-2.5 py-2 text-[10px] uppercase tracking-widest text-muted-foreground font-semibold">Project actions</header>
                  
                  {[
                    ['copy','Copy project name'],
                    ['file','Duplicate draft'],
                  ].map(([icon,label],i)=>
                    <button 
                      role="menuitem" 
                      tabIndex={-1} 
                      key={label} 
                      className="w-full flex items-center gap-2.5 text-left p-2 rounded-md hover:bg-muted focus-visible:bg-muted focus-visible:outline-none transition-colors text-xs data-[active=true]:bg-muted" 
                      data-active={seeking&&v.active===i} 
                      onClick={()=>perform(label)}
                    >
                      <Icon name={icon} size={16}/>
                      <span className="flex-1">{label}</span>
                      {i===0 && <kbd className="font-mono text-[10px] border border-border rounded px-1.5 py-0.5 text-muted-foreground">↵</kbd>}
                    </button>
                  )}
                  
                  <div className="h-px bg-border my-1.5 mx-1" />
                  
                  <button 
                    role="menuitem" 
                    tabIndex={-1} 
                    className="w-full flex items-center gap-2.5 text-left p-2 rounded-md transition-colors text-xs text-destructive hover:bg-destructive/10 focus-visible:bg-destructive/10 focus-visible:outline-none data-[active=true]:bg-destructive/10" 
                    data-active={seeking&&v.active===2} 
                    onClick={()=>perform('Archive draft')}
                  >
                    <Icon name="archive" size={16}/>
                    <span className="flex-1">Archive draft</span>
                  </button>
                </div>
              )}
            </div>
          </div>

          <div className="mt-7 pt-5 border-t border-border">
            {['Website direction.fig','Launch checklist.md'].map((f,i)=>
              <div className="flex gap-3 items-center py-2.5" key={f}>
                <Icon name="file" size={20}/>
                <div>
                  <div className="text-sm font-medium">{f}</div>
                  <small className="block text-muted-foreground text-[11px] mt-0.5">{i?'Updated 12 minutes ago':'Design exploration · v04'}</small>
                </div>
                <em className="ml-auto text-[11px] not-italic text-muted-foreground">{i?'8 KB':'4.2 MB'}</em>
              </div>
            )}
            
            {v.notice==='Draft duplicated locally' && (
              <div className="flex gap-3 items-center py-2.5 animate-in fade-in slide-in-from-bottom-2 duration-300">
                <Icon name="copy" size={20}/>
                <div>
                  <div className="text-sm font-medium">Launch checklist — copy.md</div>
                  <small className="block text-muted-foreground text-[11px] mt-0.5">Just now · Local demo</small>
                </div>
              </div>
            )}
            
            {v.notice==='Draft archived locally' && (
              <p className="text-muted-foreground text-sm mt-3 px-2 py-1.5 bg-muted rounded-md border border-border">Draft moved to local archive.</p>
            )}
          </div>
          
          <div className="flex justify-between mt-6 text-[11px] text-muted-foreground font-medium">
            <span>2 collaborators</span>
            <span>Private workspace</span>
          </div>
        </div>
        
        <p className="min-h-[22px] text-xs font-medium text-emerald-600 dark:text-emerald-400 mt-4 text-center" role="status">
          {v.notice || 'Open the project menu to explore.'}
        </p>
      </div>
    </div>
  );
}
