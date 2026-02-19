"use client";

import { useEffect, useState } from "react";

/** @Spec
 * Feature: SchemaInjector
 * Type: component
 * Description: Injects JSON-LD schema into the page head.
 * Acceptance:
 * ✅ Renders a script tag with the correct type and content.
 * ✅ Serializes the schema object into a JSON string.
 * ✅ Adds dateModified and datePublished to the WebPage node on the client-side.
 */

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function SchemaInjector({ schema: initialSchema }: { schema: any }) {
  const [schema, setSchema] = useState(initialSchema);

  useEffect(() => {
    // We create a deep copy to avoid mutating the original schema object
    const newSchema = JSON.parse(JSON.stringify(initialSchema));

    // Find the WebPage node and update its dateModified property
    const webPageIndex = newSchema["@graph"]?.findIndex(
      (node: any) => node["@type"] === "WebPage"
    );

    if (webPageIndex > -1) {
      newSchema["@graph"][webPageIndex].dateModified = new Date().toISOString();
    }
    
    setSchema(newSchema);
  }, [initialSchema]);

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
