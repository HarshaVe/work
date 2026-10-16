// Prints the page count and text of a PDF (used by check-resume-superset.sh).
import PDFKit
let d = PDFDocument(url: URL(fileURLWithPath: CommandLine.arguments[1]))!
print("PAGES:", d.pageCount)
print(d.string ?? "")
