"use client";

import * as React from "react";
import { Search, X, ChevronDown } from "lucide-react";

export interface QuestionItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface SearchableQuestionIndexProps {
  items: QuestionItem[];
  title?: string;
  placeholder?: string;
  className?: string;
}

export default function SearchableQuestionIndex({
  items,
  title = "Find an answer",
  placeholder = "Search questions…",
  className = "",
}: SearchableQuestionIndexProps) {
  const [query, setQuery] = React.useState("");
  const [selectedCategory, setSelectedCategory] = React.useState("All");
  const inputId = React.useId();

  const categories = React.useMemo(() => {
    return ["All", ...Array.from(new Set(items.map((i) => i.category)))];
  }, [items]);

  const filtered = React.useMemo(() => {
    const q = query.trim().toLowerCase();
    return items.filter((item) => {
      const matchesCategory =
        selectedCategory === "All" || item.category === selectedCategory;
      const matchesQuery =
        !q ||
        item.question.toLowerCase().includes(q) ||
        item.answer.toLowerCase().includes(q);
      return matchesCategory && matchesQuery;
    });
  }, [items, selectedCategory, query]);

  return (
    <section className={`w-full max-w-2xl mx-auto p-4 sm:p-6 text-foreground font-sans ${className}`}>
      <div className="border border-border rounded-xl p-5 sm:p-6 bg-card text-card-foreground shadow-sm flex flex-col gap-5">
        {/* Header */}
        <div className="flex items-center justify-between gap-4">
          <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-foreground">
            {title}
          </h2>
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border border-border bg-muted text-muted-foreground">
            {items.length} articles
          </span>
        </div>

        {/* Search Input Bar */}
        <div className="relative flex items-center">
          <label htmlFor={inputId} className="sr-only">
            {placeholder}
          </label>
          <Search className="absolute left-3.5 h-4 w-4 text-muted-foreground pointer-events-none" />
          <input
            id={inputId}
            type="text"
            value={query}
            placeholder={placeholder}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full pl-10 pr-10 py-2.5 text-sm rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          />
          {query && (
            <button
              type="button"
              aria-label="Clear search"
              onClick={() => setQuery("")}
              className="absolute right-3 p-1 rounded-md text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 focus-visible:ring-offset-background"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap gap-1.5" role="group" aria-label="Filter by category">
          {categories.map((c) => {
            const isSelected = selectedCategory === c;
            const count =
              c === "All"
                ? items.length
                : items.filter((i) => i.category === c).length;
            return (
              <button
                key={c}
                type="button"
                aria-pressed={isSelected}
                onClick={() => setSelectedCategory(c)}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 focus-visible:ring-offset-background ${
                  isSelected
                    ? "bg-foreground text-background shadow-xs"
                    : "bg-muted/70 text-muted-foreground hover:bg-muted hover:text-foreground"
                }`}
              >
                <span>{c}</span>
                <span className={`text-[10px] ${isSelected ? "opacity-80" : "opacity-60"}`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Live results count */}
        <p className="text-xs text-muted-foreground" role="status">
          {filtered.length} matching {filtered.length === 1 ? "answer" : "answers"}
        </p>

        {/* Questions list */}
        <div className="divide-y divide-border border-t border-border">
          {filtered.map((item) => (
            <details
              key={item.id}
              className="group py-3.5 transition-colors"
            >
              <summary className="flex items-center justify-between gap-4 cursor-pointer list-none font-medium text-sm sm:text-base text-foreground hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm">
                <span>{item.question}</span>
                <ChevronDown className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200 group-open:rotate-180" />
              </summary>
              <div className="mt-2.5 pr-6 text-sm text-muted-foreground leading-relaxed">
                <p>{item.answer}</p>
                <div className="mt-2">
                  <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium border border-border bg-muted/50 text-muted-foreground">
                    {item.category}
                  </span>
                </div>
              </div>
            </details>
          ))}
        </div>

        {/* Empty state */}
        {!filtered.length && (
          <div className="text-center py-8 flex flex-col items-center gap-3">
            <p className="text-sm text-muted-foreground">
              No answers match your search or filter criteria.
            </p>
            <button
              type="button"
              onClick={() => {
                setQuery("");
                setSelectedCategory("All");
              }}
              className="inline-flex items-center justify-center px-3.5 py-1.5 text-xs font-medium rounded-md border border-border bg-background text-foreground hover:bg-muted transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
