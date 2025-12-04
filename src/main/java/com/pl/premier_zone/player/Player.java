package com.pl.premier_zone.player;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="player_stats")
public class Player {

    @Id
    @Column(name="name", unique = true)
    private String name;
    private String nation;
    private String pos;
    private Integer mp;
    private Double min;
    private Double gls;
    private Double ast;
    private Double crdy;
    private Double crdr;
    private String team;


    public Player(){
    }

    public Player(String name, String nation, String pos, Integer mp, Double min, Double gls, Double ast, Double pk, Double crdy, Double crdr, String team) {
        this.name = name;
        this.nation = nation;
        this.pos = pos;
        this.mp = mp;
        this.min = min;
        this.gls = gls;
        this.ast = ast;
        this.crdy = crdy;
        this.crdr = crdr;
        this.team = team;
    }

    public Player(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getNation() {
        return nation;
    }

    public void setNation(String nation) {
        this.nation = nation;
    }

    public String getPos() {
        return pos;
    }

    public void setPos(String pos) {
        this.pos = pos;
    }

    public Integer getMp() {
        return mp;
    }

    public void setMp(Integer mp) {
        this.mp = mp;
    }


    public Double getMin() {
        return min;
    }

    public void setMin(Double min) {
        this.min = min;
    }

    public Double getGls() {
        return gls;
    }

    public void setGls(Double gls) {
        this.gls = gls;
    }

    public Double getAst() {
        return ast;
    }

    public void setAst(Double ast) {
        this.ast = ast;
    }

    public Double getCrdy() {
        return crdy;
    }

    public void setCrdy(Double crdy) {
        this.crdy = crdy;
    }

    public Double getCrdr() {
        return crdr;
    }

    public void setCrdr(Double crdr) {
        this.crdr = crdr;
    }

    public String getTeam() {
        return team;
    }

    public void setTeam(String team) {
        this.team = team;
    }
}
