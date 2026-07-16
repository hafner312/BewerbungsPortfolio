# Regenerates public/bewerbungsunterlagen/bewerbung.pdf from bewerbungsvorlagen/anschreiben/source.html. Run after editing source.html.
$ErrorActionPreference = "Stop"
$root = Split-Path -Parent (Split-Path -Parent $PSScriptRoot)
$edge = "C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"
$source = Join-Path $PSScriptRoot "source.html"
$siteOutput = Join-Path $root "public\bewerbungsunterlagen\bewerbung.pdf"
$tmp = Join-Path $PSScriptRoot "output.pdf"

$uri = "file:///$($source -replace '\\','/')"
Start-Process -FilePath $edge -ArgumentList @(
    "--headless", "--disable-gpu", "--no-pdf-header-footer",
    "--print-to-pdf=$tmp", "--print-to-pdf-no-header", $uri
) -Wait -NoNewWindow

if (-not (Test-Path $tmp)) { throw "PDF wurde nicht erzeugt: $tmp" }
Move-Item -Force $tmp $siteOutput
Write-Output "bewerbung.pdf aktualisiert: $siteOutput"
