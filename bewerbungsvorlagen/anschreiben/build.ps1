# Regenerates public/bewerbungsunterlagen/bewerbung.pdf from bewerbungsvorlagen/anschreiben/source.html. Run after editing source.html.
$ErrorActionPreference = "Stop"
$root = Split-Path -Parent (Split-Path -Parent $PSScriptRoot)
$edge = "C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"
$source = Join-Path $PSScriptRoot "source.html"
$siteOutput = Join-Path $root "public\bewerbungsunterlagen\bewerbung.pdf"
$tmp = Join-Path $PSScriptRoot "output.pdf"

# Pfad und Adresse muessen in Anfuehrungszeichen stehen: Der Repository-Pfad
# enthaelt mit "Meine Apps" ein Leerzeichen. Ohne Quoting zerlegt Edge das
# Argument und bricht mit "Multiple targets are not supported in headless mode"
# ab. Frueher lag das Repository unter einem Pfad ohne Leerzeichen, deshalb
# fiel es lange nicht auf.
$uri = "file:///$($source -replace '\\','/')"
Start-Process -FilePath $edge -ArgumentList @(
    "--headless",
    "--disable-gpu",
    "--no-pdf-header-footer",
    "--print-to-pdf=`"$tmp`"",
    "`"$uri`""
) -Wait -NoNewWindow

if (-not (Test-Path $tmp)) { throw "PDF wurde nicht erzeugt: $tmp" }
Move-Item -Force $tmp $siteOutput
Write-Output "bewerbung.pdf aktualisiert: $siteOutput"
