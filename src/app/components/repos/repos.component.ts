import { Component, OnInit,Input,OnChanges,ChangeDetectorRef, SimpleChanges } from '@angular/core';
import { GithubService } from 'src/app/services/github.service';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css']
})
export class ReposComponent implements OnInit ,OnChanges {

  @Input() repoUrl:string;
  repos = [];
  constructor(private githubService:GithubService ,private ref : ChangeDetectorRef) { }


  ngOnChanges(): void {
    if(this.repoUrl){
      this.githubService.getRepos(this.repoUrl).subscribe(
        (repo:[])=>{
          this.repos=repo;

          this.ref.detectChanges();
        },
        (err)=>{
          console.log(err);
        }
      )
    }
  }

  ngOnInit(): void {
  }

}
