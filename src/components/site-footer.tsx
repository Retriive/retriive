export function SiteFooter() {
  return (
    <footer id="contact" className="px-4 sm:px-8 lg:px-16 py-12 sm:py-16 border-t border-border/60">
      <div className="grid grid-cols-2 md:grid-cols-5 gap-8 sm:gap-10">

        <div className="col-span-2 md:col-span-2">
          <div className="text-xl font-semibold tracking-tight">
            Retriive<span className="text-brand"> Inc.</span>
          </div>
          <p className="mt-3 text-sm text-muted-foreground max-w-sm">
            Intelligent AI solutions for modern institutions.
          </p>
        </div>
        {[
          { title: "Contact", links: ["team@retriive.com", "Support", "Press"] },
          { title: "About", links: ["Company", "Team", "Careers"] },
          { title: "Products", links: ["CampusQ", "Roadmap", "Changelog"] },
        ].map((col) => (
          <div key={col.title}>
            <h4 className="text-sm font-semibold">{col.title}</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {col.links.map((l) => (
                <li key={l}>
                  <a href="#" className="transition-colors duration-500 ease-in-out hover:text-purple-700">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div>
          <h4 className="text-sm font-semibold">Links</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li><a href="#" className="transition-colors duration-500 ease-in-out hover:text-purple-700">Privacy</a></li>
            <li><a href="#" className="transition-colors duration-500 ease-in-out hover:text-purple-700">Terms</a></li>
            <li><a href="#" className="transition-colors duration-500 ease-in-out hover:text-purple-700">Security</a></li>
          </ul>
        </div>
      </div>
      <div className="mt-12 pt-6 border-t border-border/60 text-xs text-muted-foreground flex justify-between flex-wrap gap-2">
        <span>© {new Date().getFullYear()} Retriive Inc. All rights reserved.</span>
        <span>Built with intelligence.</span>
      </div>
    </footer>
  );
}
